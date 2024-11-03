const parent= React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id: 'child1'},[
        React.createElement('h1', {}, "Hi, I am child1 !"),
        React.createElement('h2', {}, "Hi, I am child1 !")
    ]),

    React.createElement('div', {id: 'child2'},[
        React.createElement('h1', {}, "Hi, I am child2 !"),
        React.createElement('h2', {}, "Hi, I am child2 !")
    ])
])