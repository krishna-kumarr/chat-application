export default function ({ state, setState }) {
    const jsx = {
        login: [{
            category: "input",
            type: "text",
            size: { xs: 12, p: 1 },
            title: "Username",
            placeholder: "Enter your username",
            value: state.username || "",
            onChange: (e) => setState((prev) => ({ ...prev, username: e.target.value })),
        },
        {
            category: "input",
            type: "password",
            size: { xs: 12, p: 1 },
            title: "Password",
            placeholder: "Enter your password",
            value: state.password || "",
            onChange: (e) => setState((prev) => ({ ...prev, password: e.target.value })),
        }]
    }

    return jsx
}