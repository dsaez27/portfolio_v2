const helperEmail = require("./helperEmail")
// @ponicode
describe("helperEmail.validateEmail", () => {
    test("0", () => {
        let result = helperEmail.validateEmail("something@example.com")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = helperEmail.validateEmail("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = helperEmail.validateEmail("test.test@[0000.0.0.0]")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = helperEmail.validateEmail("foo.foo@\".AA")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = helperEmail.validateEmail("user1+user2@mycompany.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = helperEmail.validateEmail(undefined)
        expect(result).toMatchSnapshot()
    })
})
