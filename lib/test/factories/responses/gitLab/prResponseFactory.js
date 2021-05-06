"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitLabPullRequestResponseFactory = void 0;
const lodash_1 = __importDefault(require("lodash"));
exports.gitLabPullRequestResponseFactory = (params) => {
    return lodash_1.default.merge({
        id: 51311331,
        iid: 26291,
        project_id: 278964,
        title: 'WIP: Add package_name as option to packages API',
        description: '## What does this MR do?\r\n\r\nAdds the `package_name` parameter to the `:id/packages` API endpoint. This allows the list of packages returned from this API call to be filtered by `package_name`.\r\n\r\nOpens up ~frontend work in gitlab-org/gitlab#197920.\r\n\r\n## Screenshots\r\n\r\nNo visual changes.\r\n\r\n## Does this MR meet the acceptance criteria?\r\n\r\n### Conformity\r\n\r\n- [ ] [Changelog entry](https://docs.gitlab.com/ee/development/changelog.html) \r\n- [ ] [Documentation](https://docs.gitlab.com/ee/development/documentation/workflow.html) ([if required](https://docs.gitlab.com/ee/development/documentation/workflow.html#when-documentation-is-required))\r\n- [ ] [Code review guidelines](https://docs.gitlab.com/ee/development/code_review.html)\r\n- [ ] [Merge request performance guidelines](https://docs.gitlab.com/ee/development/merge_request_performance_guidelines.html)\r\n- [ ] [Style guides](https://gitlab.com/gitlab-org/gitlab-ee/blob/master/doc/development/contributing/style_guides.md)\r\n- [ ] [Database guides](https://docs.gitlab.com/ee/development/README.html#database-guides)\r\n- [ ] [Separation of EE specific content](https://docs.gitlab.com/ee/development/ee_features.html#separation-of-ee-code)\r\n\r\n### Availability and Testing\r\n\r\n<!-- What risks does this change pose? How might it affect the quality/performance of the product?\r\nWhat additional test coverage or changes to tests will be needed?\r\nWill it require cross-browser testing?\r\nSee the test engineering process for further guidelines: https://about.gitlab.com/handbook/engineering/quality/test-engineering/ -->\r\n\r\n<!-- If cross-browser testing is not required, please remove the relevant item, or mark it as not needed: [-] -->\r\n\r\n- [ ] [Review and add/update tests for this feature/bug](https://docs.gitlab.com/ee/development/testing_guide/index.html). Consider [all test levels](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html). See the [Test Planning Process](https://about.gitlab.com/handbook/engineering/quality/test-engineering).\r\n- [ ] [Tested in all supported browsers](https://docs.gitlab.com/ee/install/requirements.html#supported-web-browsers)\r\n- [ ] Informed Infrastructure department of a default or new setting change, if applicable per [definition of done](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done)\r\n\r\n### Security\r\n\r\nIf this MR contains changes to processing or storing of credentials or tokens, authorization and authentication methods and other items described in [the security review guidelines](https://about.gitlab.com/handbook/engineering/security/#when-to-request-a-security-review):\r\n\r\n- [ ] Label as ~security and @ mention `@gitlab-com/gl-security/appsec`\r\n- [ ] The MR includes necessary changes to maintain consistency between UI, API, email, or other methods\r\n- [ ] Security reports checked/validated by a reviewer from the AppSec team ',
        state: 'opened',
        created_at: '2020-03-02T14:43:01.355Z',
        updated_at: '2020-03-02T14:52:49.309Z',
        merged_by: null,
        merged_at: null,
        closed_by: null,
        closed_at: null,
        target_branch: 'master',
        source_branch: '208675-add-package_name-as-option-to-packages-api',
        user_notes_count: 0,
        upvotes: 0,
        downvotes: 0,
        assignee: {
            id: 4087042,
            name: 'Nick Kipling',
            username: 'nkipling',
            state: 'active',
            avatar_url: 'https://secure.gravatar.com/avatar/e7b9b436260f09af6199c4b87fd12084?s=80&d=identicon',
            web_url: 'https://gitlab.com/nkipling',
        },
        author: {
            id: 4087042,
            name: 'Nick Kipling',
            username: 'nkipling',
            state: 'active',
            avatar_url: 'https://secure.gravatar.com/avatar/e7b9b436260f09af6199c4b87fd12084?s=80&d=identicon',
            web_url: 'https://gitlab.com/nkipling',
        },
        assignees: [
            {
                id: 4087042,
                name: 'Nick Kipling',
                username: 'nkipling',
                state: 'active',
                avatar_url: 'https://secure.gravatar.com/avatar/e7b9b436260f09af6199c4b87fd12084?s=80&d=identicon',
                web_url: 'https://gitlab.com/nkipling',
            },
        ],
        source_project_id: 278964,
        target_project_id: 278964,
        labels: ['Category:Package Registry', 'UX', 'api', 'backend', 'devops::package', 'feature', 'group::package'],
        work_in_progress: true,
        milestone: {
            id: 490705,
            iid: 14,
            group_id: 9970,
            title: 'Backlog',
            description: 'Issues that we want to do but are not planned right now. Open for contribution from the community.',
            state: 'active',
            created_at: '2018-03-22T13:09:23.767Z',
            updated_at: '2018-10-30T14:56:54.069Z',
            due_date: null,
            start_date: null,
            web_url: 'https://gitlab.com/groups/gitlab-org/-/milestones/14',
        },
        merge_when_pipeline_succeeds: false,
        merge_status: 'can_be_merged',
        sha: '75074a52c203db3fab5e9d32e6e548a11fc01aba',
        merge_commit_sha: null,
        squash_commit_sha: null,
        discussion_locked: null,
        should_remove_source_branch: null,
        force_remove_source_branch: true,
        reference: '!26291',
        references: {
            short: '!26291',
            relative: '!26291',
            full: 'gitlab-org/gitlab!26291',
        },
        web_url: 'https://gitlab.com/gitlab-org/gitlab/-/merge_requests/26291',
        time_stats: {
            time_estimate: 0,
            total_time_spent: 0,
            human_time_estimate: null,
            human_total_time_spent: null,
        },
        squash: false,
        task_completion_status: {
            count: 13,
            completed_count: 0,
        },
        has_conflicts: false,
        blocking_discussions_resolved: true,
        approvals_before_merge: null,
        subscribed: false,
        changes_count: '6',
        latest_build_started_at: '2020-03-02T14:51:24.872Z',
        latest_build_finished_at: null,
        first_deployed_to_production_at: null,
        pipeline: {
            id: 122534076,
            sha: '75074a52c203db3fab5e9d32e6e548a11fc01aba',
            ref: 'refs/merge-requests/26291/head',
            status: 'running',
            created_at: '2020-03-02T14:51:16.646Z',
            updated_at: '2020-03-02T14:51:24.873Z',
            web_url: 'https://gitlab.com/gitlab-org/gitlab/pipelines/122534076',
        },
        head_pipeline: {
            id: 122534076,
            sha: '75074a52c203db3fab5e9d32e6e548a11fc01aba',
            ref: 'refs/merge-requests/26291/head',
            status: 'running',
            created_at: '2020-03-02T14:51:16.646Z',
            updated_at: '2020-03-02T14:51:24.873Z',
            web_url: 'https://gitlab.com/gitlab-org/gitlab/pipelines/122534076',
            before_sha: '0000000000000000000000000000000000000000',
            tag: false,
            yaml_errors: null,
            user: {
                id: 4087042,
                name: 'Nick Kipling',
                username: 'nkipling',
                state: 'active',
                avatar_url: 'https://secure.gravatar.com/avatar/e7b9b436260f09af6199c4b87fd12084?s=80&d=identicon',
                web_url: 'https://gitlab.com/nkipling',
            },
            started_at: '2020-03-02T14:51:24.872Z',
            finished_at: null,
            committed_at: null,
            duration: null,
            coverage: null,
            detailed_status: {
                icon: 'status_running',
                text: 'running',
                label: 'running',
                group: 'running',
                tooltip: 'running',
                has_details: true,
                details_path: '/gitlab-org/gitlab/pipelines/122534076',
                illustration: null,
                favicon: 'https://gitlab.com/assets/ci_favicons/favicon_status_running-9c635b2419a8e1ec991c993061b89cc5aefc0743bb238ecd0c381e7741a70e8c.png',
            },
        },
        diff_refs: {
            base_sha: '3c23d0fbddd5e0188aca541ce7c0bd943cf47302',
            head_sha: '75074a52c203db3fab5e9d32e6e548a11fc01aba',
            start_sha: 'a38265069450056fe480c05d2943f79d790e7b87',
        },
        merge_error: null,
        user: {
            can_merge: false,
        },
    }, params);
};
//# sourceMappingURL=prResponseFactory.js.map