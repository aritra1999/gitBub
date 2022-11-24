import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'https://api.github.com/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}


// User - ToDO
// query { 
//   user(login: "aritra1999") { 
//     login
//     name
//     email
//     avatarUrl
//     location
//     bio
//     company
//     websiteUrl
//     repositories { 
//       totalCount
//     }
//     gists {
//       totalCount
//     }
//     followers {
//       totalCount
//     }
//     following {
//       totalCount
//     }
//   }
// }

// Repositories - ToDO
// query {
//   user(login: "aritra1999") {
//     repositories(first:100) {
//       edges {
//         node {
//           name
//           description
//           defaultBranchRef {
//             name
//           }
//           primaryLanguage {
//             name
//           }
//           url
//           sshUrl
// 					url
//           forkCount
//           stargazerCount
//           watchers {
//             totalCount
//           }
//           createdAt
//           pushedAt
//           owner {
//             login
//           }
//         }
//       }
//     }
//   }
// }

// Gists - ToDo
// query {
//   user(login: "aritra1999") {
//     gists(first: 100) {
//       edges {
//         node {
//           name
//           files {
//             encoding
//             isImage
//             language {
//               name
//             }
//             name
//             size
//             text
//           }
//         }
//       }
//     }
//   }
// }

// Followers - ToDO
// query {
//   user(login: "aritra1999") {
//     followers(first: 100) {
//       edges {
//         node {
//           login
//         }
//       }
//     }
//   }
// }

// Following - ToDo
// query {
//   user(login: "aritra1999") {
//     following(first: 100) {
//       edges {
//         node {
//           login
//         }
//       }
//     }
//   }
// }

