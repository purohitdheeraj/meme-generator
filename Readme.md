## Meme-Generator

-   [x] Design
-   [x] Events
-   [x] States
-   [x] Side Effect
-   [x] Forms

# props vs state

1. How would you describe the concept of "state"?
   A way for React to remember saved values from within a component.
   This is similar to declaring variables from within a component,
   with a few added bonuses (which we'll get to later)

2. When would you want to use props instead of state?
   Anytime you want to pass data into a component so that
   component can determine what will get displayed on the
   screen.

3. When would you want to use state instead of props?
   Anytime you want a component to maintain some values from
   within the component. (And "remember" those values even
   when React re-renders the component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
   Unchanging. Props are immutable. State is mutable.

5. Functional State Update
    - Note: if you ever need the old value of state
    - to help you determine the new value of state,
    - you should pass a callback function to your
    - state setter function instead of using
    - state directly. This callback function will
    - receive the old value of state as its parameter,
    - which you can then use to determine your new
    - value of state.
