const ghpages = require("gh-pages");

console.log("Pushing....");
ghpages.publish(
    "public", // folder contain resource after build
    {
        branch: "main",
        repo: "https://github.com/thanhdinhit/thanhdinhit.github.io", // change link your repo
        add: true,
    },
    (error) => {
        if (error) {
            console.log("Error: " + error);
        }
        console.log("Deploy completed to GIT.");
    }
);