//todo router api??
function prepareLink(route) {
    console.log(route.name);
    var base = '/' + route.name;
    if (route.params) {
        if (route.params.namespace) {
            base += '/' + route.params.namespace;
            return base + '/' + route.params.component;
        }
    }
    return '/overview' + base;
}

module.exports = {
    bind: function () {

        this.target = this.arg ? '-' + this.arg : '';

        this.link = document.createElement('a');
        this.link.setAttribute('class', 'uk-margin-left uk-icon-small uk-icon-link');
        this.link.setAttribute('uk-icon', 'icon: link');

        this.el.classList.add('uk-flex', 'uk-flex-middle');
        this.el.appendChild(this.link);
    },
    update: function (route) {
        console.log(this.target);
        console.log(route);
        var id = (route.params ? route.params.component : route.name) + this.target,
            url = prepareLink(route);
        if (this.target) {
            url += `#${id}`;
        }

        this.el.setAttribute('id', id);

        //todo refreshes page when link changes, but has hash
        this.link.setAttribute('href', url);

        //todo can't add a hash location to vue-router
        // this.el.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     this.vm.$router.go(route);
        // });
    }
};