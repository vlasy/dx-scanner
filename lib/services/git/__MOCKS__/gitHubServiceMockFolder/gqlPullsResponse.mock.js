"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneGqlPullRequest = exports.gqlPullsResponse = void 0;
const lodash_1 = __importDefault(require("lodash"));
exports.gqlPullsResponse = (params) => {
    return lodash_1.default.merge({
        data: {
            search: {
                pageInfo: {
                    hasNextPage: false,
                    hasPreviousPage: false,
                    startCursor: 'Y3Vyc29yOnYyOpHODUTjBQ==',
                    endCursor: 'Y3Vyc29yOnYyOpHOHh1zPQ==',
                },
                edges: [
                    {
                        cursor: 'Y3Vyc29yOnYyOpHODUTjBQ==',
                        node: {
                            author: {
                                url: 'https://github.com/Nythiennzo',
                                id: 'MDQ6VXNlcjE2OTE4MzEx',
                                login: 'Nythiennzo',
                                name: 'Nytiennzo Madooray',
                            },
                            url: 'https://github.com/octocat/Hello-World/pull/453',
                            number: 453,
                            title: 'Add comma in Hello World.',
                            mergeCommit: null,
                            createdAt: '2018-10-13T01:14:27Z',
                            updatedAt: '2018-10-13T01:14:27Z',
                            closedAt: null,
                            mergedAt: null,
                            state: 'OPEN',
                            baseRepository: {
                                url: 'https://github.com/octocat/Hello-World',
                                name: 'Hello-World',
                                id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
                                owner: {
                                    url: 'https://github.com/octocat',
                                    id: 'MDQ6VXNlcjU4MzIzMQ==',
                                    login: 'octocat',
                                },
                            },
                            additions: 1,
                            deletions: 1,
                        },
                    },
                ],
            },
            rateLimit: {
                limit: 5000,
                cost: 1,
                remaining: 4990,
                resetAt: '2020-10-20T10:06:46Z',
            },
        },
    }, params);
};
exports.oneGqlPullRequest = (params) => {
    return lodash_1.default.merge({
        cursor: 'Y3Vyc29yOnYyOpHODUTjBQ==',
        node: {
            author: {
                url: 'https://github.com/Nythiennzo',
                id: 'MDQ6VXNlcjE2OTE4MzEx',
                login: 'Nythiennzo',
                name: 'Nytiennzo Madooray',
            },
            url: 'https://github.com/octocat/Hello-World/pull/453',
            number: 453,
            title: 'Add comma in Hello World.',
            mergeCommit: null,
            createdAt: '2018-10-13T01:14:27Z',
            updatedAt: '2018-10-13T01:14:27Z',
            closedAt: null,
            mergedAt: null,
            state: 'OPEN',
            baseRepository: {
                url: 'https://github.com/octocat/Hello-World',
                name: 'Hello-World',
                id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
                owner: {
                    url: 'https://github.com/octocat',
                    id: 'MDQ6VXNlcjU4MzIzMQ==',
                    login: 'octocat',
                },
            },
            additions: 1,
            deletions: 1,
        },
    }, params);
};
//# sourceMappingURL=gqlPullsResponse.mock.js.map