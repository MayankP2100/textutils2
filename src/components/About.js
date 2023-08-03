import React from "react";

export default function About(aboutProps) {
  return (
    <div className="container my-4">
      <h1 className="fw-semibold text-center">About Me</h1>
      <div class="card container p-2" style={aboutProps.setCardTheme}>
        <img
          src="https://avatars.githubusercontent.com/u/74498800"
          class="card-img-top"
          alt="Github Avatar"
        />
        <div class="card-body">
          <h5 class="card-title">Dev - Mayank Pal</h5>
          <p class="card-text fw-light">He/Him</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={aboutProps.setCardInfoTheme}>
            Some of my public projects are on my{" "}
            <a
              className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="https://github.com/MayankP2100"
            >
              github
            </a>
            {"."}
          </li>
          <li class="list-group-item" style={aboutProps.setCardInfoTheme}>
            How to reach me: <br /> Discord: may.balls | Instagram:{" "}
            <a
              className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="https://www.instagram.com/mayank._.2100/"
            >
              mayank._.2100
            </a>
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}
