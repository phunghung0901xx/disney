import { request, GraphQLClient, gql } from "graphql-request";
export const getServerSideProps = async (pageContext) => {
  const url =
    "https://api-us-east-1.hygraph.com/v2/claktptdp13id01uja7s20rv2/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njg3OTEwOTMsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xha3RwdGRwMTNpZDAxdWphN3MyMHJ2Mi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZmFlYzQ4OGQtNzE5Zi00ZmE4LTljNjktYTNiOTcxNGM4MjQ1IiwianRpIjoiY2xhbXI0b2ozM2F6ZjAxdXFnNW5uNzBzeiJ9.5V5uq8FUuYTheoyKudkoVMCKNDfVwAEbvIDZwS1WUFBI1G7JfJ1N9z8NjgUSFSreMuhBPa6lxZVbwNMmtjILZBmxTKsLBeQ4OEdXLCrrHmzdQf8cVk9Ww5OfBiT0CQxsxQoD-dBXVm0HyjZe0GMp7MdciLZleW64L48JaJa2nZDh7o527refJ4xahyOdH6QQMhhXcposfkb3znl4HvojygiY9P35yK0uvh4Gjl3j74sk_c_VzS964zGFa51cjZcgJ8Ux9XfllZ22e8RLCwjR-I0Fc3GuUGTx_ky93RS6lXbyfB_2VRnzOqnrJfsPuuj2Y9IbKLLw-pxA1qXMvIfYNVUSG_ATNREtIXIT5HXbckTnCuFiRNa6NHZmDWH-hzEDA7idwv-GVJnzddidWXgdFS3HStDMxt_awidj5PqdZIE_EfXH5EoiYSYEcWsd6AA3MV9khPLCM4MnqVx8tntezGjS6DT93K7R5atcP-r_1Op9eRgEwC9I8iDZ4Agsm-G8hjJweq5aBrnJe1un69Nmw-hWx7z8bACAi334zJVNgzztHehXFiyoq3Qg13fQEofOgglpouNfIcn20c5zCPUuh84onV1GGUldrMhKIap3B34stJfxAngglYpRG1SI5AS3zlyDw-9PxkIISSlWbou7nwRAzrXuAmmKfnS2wyd_8KA",
    },
  });
  const pageSlug = pageContext.query.slug;
  const query = gql`
    query ($pageSlug: String!) {
      video(where: { slug: $pageSlug }) {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;
  const variables = {
    pageSlug,
  };
  const data = await graphQLClient.request(query, variables);
  const video = data.video;
  return {
    props: {
      video,
    },
  };
};

const Video = ({ video }) => {
  console.log(video);
  return <div></div>;
};
export default Video;
