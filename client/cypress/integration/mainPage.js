describe("Main page", () => {
    context("Header", () => {
        it("Renders a Header bar", () => {
            cy.visit("/", {
                onBeforeLoad: win => {
                    win.fetch = null;
                }
            });
            cy.get("[data-test=header]").should("be.visible");
        });
    });

    context("Recently Posted Items", () => {
        it("Fetches and displays recently posted items", () => {
            cy.server();
            cy.route("GET", "**/api/posts/**", "fixture:recentPosts");
            cy.visit("/", {
                onBeforeLoad: win => {
                    delete win.fetch;
                }
            });
            cy.get("[data-test=post-card]").should("be.visible");
        });
    });

    context("New post button", () => {
        it("Renders the new post button and links to the new post form ", () => {
            cy.visit("/", {
                onBeforeLoad: win => {
                    win.fetch = null;
                }
            });
            cy.get("[data-test=new-post-btn]")
              .should("be.visible")
              .contains("New post")

            cy.get("[data-test=new-post-btn]").click();
            cy.url().should("include", "/new");
        });
    });

    context("Liked posts button", () => {
        it("Renders the likedPosts icons and links to the list of likes", () => {
            cy.visit("/", {
                onBeforeLoad: win => {
                    win.fetch = null;
                }
            });
            cy.get("[data-test=likes-btn]").should("be.visible");

            cy.get("[data-test=likes-btn]").click();
            cy.url().should("include", "/likes");
        });
    });

  context("Main page button", () => {
    it("Renders the logo and links to the main page", () => {
      cy.visit("/", {
        onBeforeLoad: win => {
          win.fetch = null;
        }
      });
      cy.get("[data-test=logo-btn]")
        .should("be.visible");

      cy.get("[data-test=logo-btn]").click();
      cy.location('pathname').should('eq', '/');
    });
  });
});
