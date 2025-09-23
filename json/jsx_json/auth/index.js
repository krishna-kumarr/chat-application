export default function ({ state, setState }) {
    const jsx = {
        login: [{
            category: "input",
            type: "text",
            title: "Username",
            placeholder: "Enter your username",
            parent_style: { width: '100%', mb: 2 },
            child_style: { width: '100%' },
            color: 'primary',
            variant: 'outlined',
            size: "small",
            floating_label: false,

            onChange: (e) => setState((prev) => ({ ...prev, username: e.target.value })),
            value: state.username || "",
            is_mandatory: false,
            Err: false
        },
        {
            category: "input",
            type: "password",
            title: "Password",
            placeholder: "Enter your password",
            parent_style: { width: '100%', mb: 2 },
            child_style: { width: '100%' },
            color: 'primary',
            variant: 'outlined',
            size: "small",
            floating_label: false,

            value: state.password || "",
            onChange: (e) => setState((prev) => ({ ...prev, password: e.target.value })),
            is_mandatory: true,
            Err: false
        }]
    }

    return jsx
}