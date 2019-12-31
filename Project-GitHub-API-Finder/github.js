class Github {
    constructor(){
        this.client_id = 'd9308aacf8b204d361fd';
        this.client_secret = 'ewrvewrdwecr4rew45453';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`http://api.github.com/users/${user}/repos? per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            // profile: profile and repos: repos - with es6 syntax can write just profile as shown below
            profile,
            repos
        }
    }
}