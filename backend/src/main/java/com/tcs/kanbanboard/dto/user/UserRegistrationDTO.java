package com.tcs.kanbanboard.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserRegistrationDTO {

    @Email(message = "E-mail should be a valid e-mail")
    @NotBlank(message = "E-mail is required")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d).+$",
            message = "Password must contain at least one uppercase letter and one number")
    private String password;

    public UserRegistrationDTO() {}

    public UserRegistrationDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
