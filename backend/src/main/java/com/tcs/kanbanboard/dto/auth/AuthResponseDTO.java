package com.tcs.kanbanboard.dto.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponseDTO {

    @NotBlank
    private String accessToken;

    @NotBlank
    private String tokenType = "Bearer";

    private String refreshToken;

    private long expiresIn;

    private String email;
}
