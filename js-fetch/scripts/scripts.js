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
    const card = document.createElement('div');
    card.className = 'card mb-4';
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
    return card;
}

// Function to fetch trending repositories
function fetchTrendingRepos() {
    const request = new XMLHttpRequest();
    const reposContainer = document.getElementById('trending-repos');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
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
                console.error('Error fetching trending repos:', this.status);
                reposContainer.innerHTML = '<p class="notification is-danger">Error fetching trending repositories. Please try again later.</p>';
            }
        }
    };

    request.open("GET", "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc", true);
    request.send();
}

// Function to fetch all GitHub Issues for create-react-app
function fetchAllGitHubIssues() {
    const request = new XMLHttpRequest();
    const issuesContainer = document.getElementById('github-issues');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const issues = JSON.parse(this.responseText);
                // Create HTML for each issue, displaying title and body
                issuesContainer.innerHTML = issues.map(issue => createIssueHTML(issue)).join('');
            } else {
                console.error('Error fetching GitHub issues:', this.status);
                issuesContainer.innerHTML = '<p class="notification is-danger">Error fetching GitHub issues. Please try again later.</p>';
            }
        }
    };

    request.open("GET", "https://api.github.com/repos/facebook/create-react-app/issues", true);
    request.send();
}

// Function to fetch a specific GitHub Issue
function fetchSpecificGitHubIssue(issueNumber) {
    const request = new XMLHttpRequest();
    const issuesContainer = document.getElementById('github-issues');

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const issue = JSON.parse(this.responseText);
                // Clear previous issues and display the specific issue
                issuesContainer.innerHTML = createIssueHTML(issue);
            } else {
                console.error('Error fetching specific GitHub issue:', this.status);
                issuesContainer.innerHTML = '<p class="notification is-danger">Error fetching the specific GitHub issue. Please check the issue number and try again.</p>';
            }
        }
    };

    request.open("GET", `https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`, true);
    request.send();
}

// Function to create HTML for a single issue
function createIssueHTML(issue) {
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

// New: Function to toggle dark mode
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

// New: Function to check and set initial dark mode state
function checkDarkMode() {
    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        // If it was, toggle dark mode on
        toggleDarkMode();
    }
}

// Event listener for form submission (Search and Replace)
document.getElementById('github-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('github-username').value;
    fetchGitHubUser(username, 'replace');
    this.reset(); // Clear the form
});

// Event listener for Search and Add button
document.getElementById('search-add').addEventListener('click', function() {
    const username = document.getElementById('github-username').value;
    if (username) {
        fetchGitHubUser(username, 'add');
        document.getElementById('github-form').reset(); // Clear the form
    } else {
        alert('Please enter a GitHub username');
    }
});

// Event listener for Search and Replace button
document.getElementById('search-replace').addEventListener('click', function() {
    const username = document.getElementById('github-username').value;
    if (username) {
        fetchGitHubUser(username, 'replace');
        document.getElementById('github-form').reset(); // Clear the form
    } else {
        alert('Please enter a GitHub username');
    }
});

// Event listener for Fetch All Issues button
document.getElementById('fetch-issues').addEventListener('click', fetchAllGitHubIssues);

// Event listener for Fetch Specific Issue form
document.getElementById('specific-issue-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const issueNumber = document.getElementById('issue-number').value;
    if (issueNumber) {
        fetchSpecificGitHubIssue(issueNumber);
        this.reset(); // Clear the form
    } else {
        alert('Please enter an issue number');
    }
});

// New: Event listener for dark mode toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// Updated: DOMContentLoaded event listener to include dark mode check
document.addEventListener('DOMContentLoaded', function() {
    // Check and set initial dark mode state
    checkDarkMode();
    // Fetch trending repositories (existing functionality)
    fetchTrendingRepos();
});

// Call fetchTrendingRepos when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchTrendingRepos);