import React, { useState } from "react"

const Form = props => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div className="Display">
            <div className="Form">
                <span>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName"
                        value={ firstName }
                        onChange={ (e) => setFirstName(e.target.value) }
                    />
                </span>

                <span>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName"
                        value={ lastName }
                        onChange={ (e) => setLastName(e.target.value) }
                    />
                </span>

                <span>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </span>

                <span>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </span>

                <span>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword"
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </span>
            </div>

            <p className="Header">Your Form Data</p>

            <div className="Values">
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>{ firstName }</td>
                    </tr>

                    <tr>
                        <td>Last Name</td>
                        <td>{ lastName }</td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>{ email }</td>
                    </tr>

                    <tr>
                        <td>Password</td>
                        <td>{ password }</td>
                    </tr>

                    <tr>
                        <td>Confirm Password</td>
                        <td>{ confirmPassword }</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Form