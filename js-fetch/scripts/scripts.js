// Function to fetch GitHub user info
function fetchGitHubUser(username, action = 'replace') {
    // Create a new XMLHttpRequest object
    const request = new XMLHttpRequest();
    // Get the container where user info will be displayed
    const userInfoContainer = document.getElementById('github-user-info');

    // Set up the callback for when the request state changes
    request.onreadystatechange = function () {
        // Check if the request is complete
        if (this.readyState === 4) {
            // Check if the request was successful
            if (this.status === 200) {
                // Parse the JSON response
                const user = JSON.parse(this.responseText);
                // Create a card with the user's information
                const userCard = createUserCard(user);
                
                // Either add the new card or replace existing content
                if (action === 'add') {
                    userInfoContainer.appendChild(userCard);
                } else { // replace
                    userInfoContainer.innerHTML = '';
                    userInfoContainer.appendChild(userCard);
                }
                
                // Make sure the container is visible
                userInfoContainer.style.display = 'block';
            } else {
                // Log error and display error message
                console.error('Error fetching GitHub user:', this.status);
                const errorMessage = document.createElement('p');
                errorMessage.className = 'notification is-danger';
                errorMessage.textContent = 'Error fetching GitHub user. Please try again.';
                
                // Either add the error message or replace existing content
                if (action === 'add') {
                    userInfoContainer.appendChild(errorMessage);
                } else { // replace
                    userInfoContainer.innerHTML = '';
                    userInfoContainer.appendChild(errorMessage);
                }
                
                // Make sure the container is visible
                userInfoContainer.style.display = 'block';
            }
        }
    };

    // Set up and send the request
    request.open("GET", `https://api.github.com/users/${username}`, true);
    request.send();
}

// Function to create a card displaying user information
function createUserCard(user) {
    // Create a new div element for the card
    const card = document.createElement('div');
    // Add CSS classes to the card
    card.className = 'card mb-4';
    // Populate the card with user information using template literals
    card.innerHTML = `
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="${user.avatar_url}" alt="${user.login}'s avatar" style="border-radius: 50%;">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">${user.name || user.login}</p>
                    <p class="subtitle is-6">@${user.login}</p>
                </div>
            </div>
            <div class="content">
                <p>${user.bio || 'No bio available'}</p>
                <p><strong>Followers:</strong> ${user.followers} | <strong>Following:</strong> ${user.following}</p>
                <p><strong>Public Repos:</strong> ${user.public_repos}</p>
                <a href="${user.html_url}" target="_blank" class="button is-small is-link">View Profile</a>
            </div>
        </div>
    `;
    // Return the created card
    return card;
}

// Function to fetch trending repositories
function fetchTrendingRepos() {
    // Create a new XMLHttpRequest object
    const request = new XMLHttpRequest();
    // Get the container where trending repos will be displayed
    const reposContainer = document.getElementById('trending-repos');

    // Set up the callback for when the request state changes
    request.onreadystatechange = function () {
        // Check if the request is complete
        if (this.readyState === 4) {
            // Check if the request was successful
            if (this.status === 200) {
                // Parse the JSON response
                const repos = JSON.parse(this.responseText);
                // Create HTML for the first 5 trending repositories
                reposContainer.innerHTML = repos.items.slice(0, 5).map(repo => `
                    <div class="box">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>${repo.name}</strong> <small>by ${repo.owner.login}</small>
                                        <br>
                                        ${repo.description || 'No description available'}
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a class="level-item" aria-label="star">
                                            <span class="icon is-small"><i class="fas fa-star"></i></span>
                                            <span>${repo.stargazers_count}</span>
                                        </a>
                                        <a class="level-item" aria-label="fork">
                                            <span class="icon is-small"><i class="fas fa-code-branch"></i></span>
                                            <span>${repo.forks_count}</span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                `).join('');
            } else {
                // Log error and display error message
                console.error('Error fetching trending repos:', this.status);
                reposContainer.innerHTML = '<p class="notification is-danger">Error fetching trending repositories. Please try again later.</p>';
            }
        }
    };

    // Set up and send the request to GitHub API
    request.open("GET", "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc", true);
    request.send();
}

// Function to fetch all GitHub Issues for create-react-app
function fetchAllGitHubIssues() {
    // Create a new XMLHttpRequest object
    const request = new XMLHttpRequest();
    // Get the container where issues will be displayed
    const issuesContainer = document.getElementById('github-issues');

    // Set up the callback for when the request state changes
    request.onreadystatechange = function () {
        // Check if the request is complete
        if (this.readyState === 4) {
            // Check if the request was successful
            if (this.status === 200) {
                // Parse the JSON response
                const issues = JSON.parse(this.responseText);
                // Create HTML for each issue, displaying title and body
                issuesContainer.innerHTML = issues.map(issue => createIssueHTML(issue)).join('');
            } else {
                // Log error and display error message
                console.error('Error fetching GitHub issues:', this.status);
                issuesContainer.innerHTML = '<p class="notification is-danger">Error fetching GitHub issues. Please try again later.</p>';
            }
        }
    };

    // Set up and send the request to GitHub API
    request.open("GET", "https://api.github.com/repos/facebook/create-react-app/issues", true);
    request.send();
}

// Function to fetch a specific GitHub Issue
function fetchSpecificGitHubIssue(issueNumber) {
    // Create a new XMLHttpRequest object
    const request = new XMLHttpRequest();
    // Get the container where the issue will be displayed
    const issuesContainer = document.getElementById('github-issues');

    // Set up the callback for when the request state changes
    request.onreadystatestate = function () {
        // Check if the request is complete
        if (this.readyState === 4) {
            // Check if the request was successful
            if (this.status === 200) {
                // Parse the JSON response
                const issue = JSON.parse(this.responseText);
                // Clear previous issues and display the specific issue
                issuesContainer.innerHTML = createIssueHTML(issue);
            } else {
                // Log error and display error message
                console.error('Error fetching specific GitHub issue:', this.status);
                issuesContainer.innerHTML = '<p class="notification is-danger">Error fetching the specific GitHub issue. Please check the issue number and try again.</p>';
            }
        }
    };

    // Set up and send the request to GitHub API
    request.open("GET", `https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`, true);
    request.send();
}

// Function to create HTML for a single issue
function createIssueHTML(issue) {
    // Return HTML string for the issue using template literals
    return `
        <div class="box">
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>${issue.title}</strong>
                            <br>
                            ${issue.body}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    `;
}

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Get the dark mode toggle button
    const darkModeButton = document.getElementById('dark-mode-toggle');
    
    // Check if dark mode is currently active
    if (document.body.classList.contains('dark-mode')) {
        // If active, change button to show 'Toggle Light Mode'
        darkModeButton.innerHTML = '<span class="icon"><i class="fas fa-sun"></i></span><span>Toggle Light Mode</span>';
        // Save the dark mode state to localStorage
        localStorage.setItem('darkMode', 'enabled');
    } else {
        // If not active, change button to show 'Toggle Dark Mode'
        darkModeButton.innerHTML = '<span class="icon"><i class="fas fa-moon"></i></span><span>Toggle Dark Mode</span>';
        // Save the light mode state to localStorage
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Function to check and set initial dark mode state
function checkDarkMode() {
    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        // If it was, toggle dark mode on
        toggleDarkMode();
    }
}

// Event listener for form submission (Search and Replace)
document.getElementById('github-form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Get the entered username
    const username = document.getElementById('github-username').value;
    // Fetch the GitHub user info and replace existing content
    fetchGitHubUser(username, 'replace');
    // Clear the form
    this.reset();
});

// Event listener for Search and Add button
document.getElementById('search-add').addEventListener('click', function() {
    // Get the entered username
    const username = document.getElementById('github-username').value;
    if (username) {
        // If username is not empty, fetch the GitHub user info and add to existing content
        fetchGitHubUser(username, 'add');
        // Clear the form
        document.getElementById('github-form').reset();
    } else {
        // If username is empty, show an alert
        alert('Please enter a GitHub username');
    }
});

// Event listener for Search and Replace button
document.getElementById('search-replace').addEventListener('click', function() {
    // Get the entered username
    const username = document.getElementById('github-username').value;
    if (username) {
        // If username is not empty, fetch the GitHub user info and replace existing content
        fetchGitHubUser(username, 'replace');
        // Clear the form
        document.getElementById('github-form').reset();
    } else {
        // If username is empty, show an alert
        alert('Please enter a GitHub username');
    }
});

// Event listener for Fetch All Issues button
document.getElementById('fetch-issues').addEventListener('click', fetchAllGitHubIssues);

// Event listener for Fetch Specific Issue form
document.getElementById('specific-issue-form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Get the entered issue number
    const issueNumber = document.getElementById('issue-number').value;
    if (issueNumber) {
        // If issue number is not empty, fetch the specific GitHub issue
        fetchSpecificGitHubIssue(issueNumber);
        // Clear the form
        this.reset();
    } else {
        // If issue number is empty, show an alert
        alert('Please enter an issue number');
    }
});

// Event listener for dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// DOMContentLoaded event listener to initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Check and set initial dark mode state
    checkDarkMode();
    // Fetch trending repositories
    fetchTrendingRepos();
});

// Call fetchTrendingRepos when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchTrendingRepos);