import { PracticeContext } from '../../contexts/practice/PracticeContext';
import { sharedSubpath } from '../../detectors/utils';
import { PracticeEvaluationResult, PracticeImpact } from '../../model';
import { ReporterUtils } from '../../reporters/ReporterUtils';
import { GitServiceUtils } from '../../services/git/GitServiceUtils';
import { DxPractice } from '../DxPracticeDecorator';
import { IPractice } from '../IPractice';

@DxPractice({
  id: 'LanguageIndependent.DoesPullRequests',
  name: 'Do PullRequests',
  impact: PracticeImpact.medium,
  suggestion: 'Do pull requests. It helps you catch the bad code before it is merged into the main codebase.',
  reportOnlyOnce: true,
  url: 'https://developerexperience.io/practices/pull-requests',
})
export class DoesPullRequests implements IPractice {
  async isApplicable(): Promise<boolean> {
    return true;
  }

  async evaluate(ctx: PracticeContext): Promise<PracticeEvaluationResult> {
    if (ctx.fileInspector === undefined || ctx.collaborationInspector === undefined) {
      return PracticeEvaluationResult.unknown;
    }
    const paths = [];
    let repoName;
    paths.push(ctx.projectComponent.path);

    //reused code from CLIReporter -> refactor it
    const componentsSharedSubpath = sharedSubpath(paths);
    if (ctx.projectComponent.repositoryPath) {
      repoName = ReporterUtils.getPathOrRepoUrl(
        ctx.projectComponent.repositoryPath,
        ctx.projectComponent.path.replace(componentsSharedSubpath, ''),
      );
    } else {
      repoName = ctx.projectComponent.path;
    }
    const ownerAndRepoName = GitServiceUtils.getOwnerAndRepoName(repoName);

    const pullRequests = await ctx.collaborationInspector.getPullRequests(ownerAndRepoName.owner, ownerAndRepoName.repoName);
    if (pullRequests.items.length > 0) {
      return PracticeEvaluationResult.practicing;
    }

    return PracticeEvaluationResult.notPracticing;
  }
}