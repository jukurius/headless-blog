import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `query getAllPosts {
        categories {
          nodes {
            name
            slug
          }
        }
        posts {
          nodes {
            date
            title
            slug
            featuredImage {
              node {
                mediaDetails {
                  file
                  sizes {
                    width
                    height
                    sourceUrl
                  }
                }
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }`,
  };
  return await graphqlRequest(query);
}

export async function getLatestPosts() {
  const query = {
    query: `query getLatestPosts {
        posts(first: 4) {
          nodes {
            date
            title
            slug
            featuredImage {
              node {
                mediaDetails {
                  file
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
                mediaItemUrl
              }
            }
            excerpt(format: RENDERED)
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }`,
  };
  return await graphqlRequest(query);
}

export async function getSinglePost(slug: string) {
  const query = {
    query: `query getSinglePost {
      post(id: "${slug}", idType: SLUG) {
        content(format: RENDERED)
        date
        excerpt(format: RENDERED)
        modified
        slug
        title(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                height
                width
              }
            }
            mediaItemUrl
          }
        }
        author {
          node {
            firstName
            lastName
            nickname
            name
          }
        }
      }
      category(id: "") {
        name
        slug
      }
    }`,
  };
  return await graphqlRequest(query);
}
