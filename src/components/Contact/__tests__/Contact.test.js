import React from "react";
import { render, cleanup } from "@testing-library/react";
import Contact from "../Contact";

afterEach(cleanup);

describe("Test suite for Contact", () => {
  it("renders the contact div", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("contact")).toBeInTheDocument();
  });

  it("renders one of the image icons", () => {
    const { getByAltText } = render(<Contact />);
    expect(getByAltText("gitlab")).toBeInTheDocument();
  });

  it("match snapshot", () => {
    const { container } = render(<Contact />);

    // Optional notes: matchInlineSnapshot may fail if code is not properly formatted and prettier is not installed as a dependency. Read more: https://github.com/facebook/jest/issues/8467

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bdVaJa iYhYUe"
          data-testid="contact"
          id="contact"
        >
          <h2>
            Contact
          </h2>
          <p>
            Want to grow your team? Hire me, I will bring aboard my passion and communication skills
            <span
              aria-label="smiling face with smiling eyes"
              role="img"
            >
              😊
            </span>
          </p>
          <p>
            Need a hand on an interesting project? Let's talk. I gatchu! 
            <span
              aria-label="handshake"
              role="img"
            >
              🤝
            </span>
          </p>
          <p>
            Off the keyboard and screens, I'm very social, we could talk about anything 
            <br />
             - art, music, science, technology etc. 
            <br />
            Connect with me on any of these platforms
          </p>
          <div>
            <span>
              <a
                href="https://linkedin.com/in/josemarianriagu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="linkedin"
                  src="/assets/icons/linkedin.png"
                />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/josenriagu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="twitter"
                  src="/assets/icons/twitter.png"
                />
              </a>
            </span>
            <span>
              <a
                href="https://gitlab.com/josenriagu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="gitlab"
                  src="/assets/icons/gitlab.png"
                />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/josenriagu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="github"
                  src="/assets/icons/github.png"
                />
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/thedrflynn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="instagram"
                  src="/assets/icons/instagram.png"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    `);
  });
});
