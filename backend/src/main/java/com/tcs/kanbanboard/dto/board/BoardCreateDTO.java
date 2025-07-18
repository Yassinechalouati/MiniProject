package com.tcs.kanbanboard.dto.board;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BoardCreateDTO {
    @NotBlank(message = "Board name is required")
    @Size(min = 2, max = 100, message = "Board name must be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Owner e-mail is required")
    @Email(message = "Must be a valid email address")
    private String ownerEmail;
}
