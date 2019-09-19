import { IPackageInspector } from '../../inspectors/IPackageInspector';
import { createTestContainer, TestContainerContext } from '../../inversify.config';
import { PracticeEvaluationResult, ProgrammingLanguage } from '../../model';
import { ESLintCorrectlyUsedPractice } from './ESLintCorrectlyUsed';

describe('ESLintCorrectlyUsedPractice', () => {
  let practice: ESLintCorrectlyUsedPractice;
  let containerCtx: TestContainerContext;
  let packageInspector: IPackageInspector;

  beforeAll(() => {
    containerCtx = createTestContainer();
    containerCtx.container.bind('ESLintCorrectlyUsedPractice').to(ESLintCorrectlyUsedPractice);
    practice = containerCtx.container.get('ESLintCorrectlyUsedPractice');
    packageInspector = <IPackageInspector>containerCtx.practiceContext.packageInspector;
  });

  it('Did not detect ESLint', async () => {
    packageInspector.hasPackage = () => false;

    containerCtx.practiceContext.projectComponent.language = ProgrammingLanguage.TypeScript;

    const result = await practice.evaluate(containerCtx.practiceContext);
    expect(result).toEqual(PracticeEvaluationResult.notPracticing);
  });
});
