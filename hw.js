/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        let heisse = new RegExp('^[A-Za-z\-]+ [A-Za-z\-]+$');
        test.name();
    },
    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits.
     */
    phone: function (input) {
        let telefone = new RegExp('^[0-9\-\()]{3} [0-9 \- ]{3} [0-9]{4}$');
        test.phone();
    },
    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        let mail = new RegExp('^[a-zA-Z0-9]+\@[A-Za-z]+\.[a-zA-Z]+$');
        test.email();
    },
    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by either {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        let addr = new RegExp('^[0-9]+ [a-zA-Z ]+ [a-zA-Z]{2,4}$')
        test.address
    },
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        let user = new RegExp('^[A-Za-z0-9\-\_]{4,16}$');
        test.username();
    },
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
        let web = new RegExp('^[a-z0-9\:\/\.]+$');
        test.url();
    },

    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
        let ip = new RegExp('^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$')
    },
};