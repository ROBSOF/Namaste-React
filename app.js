const parent = React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
        "div",
        {id:"child"},
      [  React.createElement(
            "h1",
            {},
            "Hii i am h1 tage"
        ),
        React.createElement(
            "h2",
            {},
            "This is the h2 tage"
        )
    ]
    ),
    React.createElement(
        "div",
        {id:"heading"},
      [  React.createElement(
            "h1",
            {},
            "Hii i am h1 tage"
        ),
        React.createElement(
            "h2",
            {},
            "This is the h2 tage"
        )
    ]
    )
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);