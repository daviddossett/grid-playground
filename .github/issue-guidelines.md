1. **Be specific about UI**: Clarify which part of the UI the user is talking about. For example, many issues reference "the sidebar". If the user is talking about the CSS out that the tool generates, suggest including mentions of the "Code Sidebar. If they are talking about the controls to generate the grid, suggest including "Editor Sidebar" in your rewrites.
3. **Be nice!**: Nobody likes being yelled at! Don't use all caps or a bunch of angry emojis. 
4. **Structure the issue**: Use the example below as a model of a clear, actionable bug report:

    ```
    ## Description

    When using grid-playground to generate a CSS grid, the "CSS" panel that shows the code output overflows off the edge of the screen.

    ## Expected Behavior

    The CSS should wrap to fit within the constraints of the panel.

    [screenshot]

    ## Steps to Reproduce

    1. Create a new grid
    2. Configure the grid to have 5+ rows and columns.
    3. Observe that the `grid-template-rows` and `grid-template-columns` values overflow of the right side of the panel.
    ```