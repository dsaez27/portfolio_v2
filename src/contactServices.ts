export const contact = (name, email, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name, email, message);
        }, 500);
    });
};
