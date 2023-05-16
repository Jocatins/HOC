# Higher Order Component

A higher-order component is a function that takes in a component and returns a new component.

Using code, we can rewrite the above statement like so:
const newComponent = higherFunction(WrappedComponent);

In this line:

-   newComponent — will be the enhanced component
-   higherFunction — as the name suggests, this function will enhance WrappedComponent
-   WrappedComponent — The component whose functionality we want to extend. In other words, this will be the component that we want to enhance
