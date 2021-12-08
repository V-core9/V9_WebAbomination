
const v_pages = {

    _list: {

        'index': {
            title: "Home",
            meta: {
                description: "Welcome to V-core9.com"
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'Index of V-core9',
                    subtitle: 'Welcome to V-core9.com',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'register': {
            title: "Register / Sign-up",
            meta: {
                description: "Register new account at V-core9.com"
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'Register / Sign-up',
                    subtitle: 'Register new account at V-core9.com',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'login': {
            title: "Login/Sign-in",
            meta: {
                description: "LOGIN TO V-core9.com"
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'Index of V-core9',
                    subtitle: 'Welcome to V-core9.com',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'about': {
            title: "About Us",
            meta: {
                description: "Learn More with V-core9.com"
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'About Us',
                    subtitle: 'Learn More with V-core9.com',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'contact': {
            title: "Contact Us",
            meta: {
                description: "Send few signals to V-core9.com"
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'Contact Us',
                    subtitle: 'Contact More Contact V-core9.com',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'system_status': {
            title: "System Status V-core9",
            meta: {
                description: "Hopefully will provide more then some random text. Stats like server info, uptime...etc."
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'System Status V-core9',
                    subtitle: 'Hopefully will provide more then some random text. Stats like server info, uptime...etc.',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'privacy_policy': {
            title: "Website Privacy Policy",
            meta: {
                description: "V-core9 Privacy Policy page to show some data about this."
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'Website Privacy Policy',
                    subtitle: 'V-core9 Privacy Policy page to show some data about this.',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        },

        'terms_policy': {
            title: "Terms and Conditions",
            meta: {
                description: "Terms and conditions page for the V-core9 to show some data about this."
            },
            $_page: [
                {
                    type: 'hero',
                    title: 'Terms and Conditions',
                    subtitle: 'Terms and conditions page for the V-core9 to show some data about this.',
                    image: 'https://v-core9.com/images/v-core9-logo.png',
                    image_alt: 'V-core9 Logo',
                    image_width: 350,
                    image_height: 350,
                }
            ]
        }

    },

    load(name) {
        if (this._list[name]) {
            return this._list[name];
        }
        return false;
    },

};


module.exports = v_pages;
