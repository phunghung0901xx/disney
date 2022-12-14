import React from "react";
import { request, GraphQLClient, gql } from "graphql-request";
import Section from "../components/Section";
export const getStaticProps = async () => {
  const url =
    "https://api-us-east-1.hygraph.com/v2/claktptdp13id01uja7s20rv2/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njg3OTEwOTMsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xha3RwdGRwMTNpZDAxdWphN3MyMHJ2Mi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZmFlYzQ4OGQtNzE5Zi00ZmE4LTljNjktYTNiOTcxNGM4MjQ1IiwianRpIjoiY2xhbXI0b2ozM2F6ZjAxdXFnNW5uNzBzeiJ9.5V5uq8FUuYTheoyKudkoVMCKNDfVwAEbvIDZwS1WUFBI1G7JfJ1N9z8NjgUSFSreMuhBPa6lxZVbwNMmtjILZBmxTKsLBeQ4OEdXLCrrHmzdQf8cVk9Ww5OfBiT0CQxsxQoD-dBXVm0HyjZe0GMp7MdciLZleW64L48JaJa2nZDh7o527refJ4xahyOdH6QQMhhXcposfkb3znl4HvojygiY9P35yK0uvh4Gjl3j74sk_c_VzS964zGFa51cjZcgJ8Ux9XfllZ22e8RLCwjR-I0Fc3GuUGTx_ky93RS6lXbyfB_2VRnzOqnrJfsPuuj2Y9IbKLLw-pxA1qXMvIfYNVUSG_ATNREtIXIT5HXbckTnCuFiRNa6NHZmDWH-hzEDA7idwv-GVJnzddidWXgdFS3HStDMxt_awidj5PqdZIE_EfXH5EoiYSYEcWsd6AA3MV9khPLCM4MnqVx8tntezGjS6DT93K7R5atcP-r_1Op9eRgEwC9I8iDZ4Agsm-G8hjJweq5aBrnJe1un69Nmw-hWx7z8bACAi334zJVNgzztHehXFiyoq3Qg13fQEofOgglpouNfIcn20c5zCPUuh84onV1GGUldrMhKIap3B34stJfxAngglYpRG1SI5AS3zlyDw-9PxkIISSlWbou7nwRAzrXuAmmKfnS2wyd_8KA",
    },
  });

  const videosQuery = gql`
    query {
      videos {
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

  const accountQuery = gql`
    query {
      account(where: { id: "cksggd6jc9j1k0b09zj98fnec" }) {
        username
        avatar {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;

  return {
    props: {
      videos,
      account,
    },
  };
};

const Home = ({ videos }) => {
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };
  const filterVideos = (videos, gener) => {
    return videos.filter((video) => video.tags.includes(gener));
  };
  return (
    <>
      <div className="app">
        <div className="main-video">
          <img
            src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).title}
          />
        </div>
        <div className="video-feed">
          <Section genre={"family"} />
        </div>
      </div>
    </>
  );
};

export default Home;
