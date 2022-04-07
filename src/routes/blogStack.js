import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"

import BlogScreen from '../screens/blog/blog.js'
import IndividualBlogScreen from '../screens/blog/individualBlog.js'

// create key value pairs
const screens = {
    Blog: {
        screen: BlogScreen,
        navigationOptions: {
            title: 'Metropolis Blog',
        }
    },
    IndividualBlog: {
        screen: IndividualBlogScreen,
        navigationOptions: {
            title: 'Blog Post'
        }
    },
}

const BlogStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#5ae',
            height: 90,
        }
    }
});

// create AppContainer to render to App.js
export default BlogStack;