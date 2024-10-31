1. **Be specific about UI**: Tell us which part of the UI you are talking about. For example, many issues reference "the sidebar". Identify if you are talking about the "editor" sidebar or the "CSS output" sidebar. 
2. **Avoid vague issues**: Short, vague issues like "grid layout is broken" make it hard to know what needs fixing. 
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

      Example code:
      
      .grid-container { 
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 3fr;
        grid-column-gap: 23px;
        grid-row-gap: 32px;
        padding: 32px 48px; 
      }
      
```