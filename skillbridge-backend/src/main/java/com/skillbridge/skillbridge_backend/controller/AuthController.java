package com.skillbridge.skillbridge_backend.controller;

import com.skillbridge.skillbridge_backend.dto.LoginRequest;
import com.skillbridge.skillbridge_backend.dto.RegisterRequest;
import com.skillbridge.skillbridge_backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Register
    @PostMapping("/register")
    public ResponseEntity<String> register(
            @Valid @RequestBody RegisterRequest request) {

        String response = authService.registerUser(request);

        if (response.equals("Email already registered")) {
            return ResponseEntity.badRequest().body(response);
        }

        return ResponseEntity.ok(response);
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<String> login(
            @Valid @RequestBody LoginRequest request) {

        String response = authService.loginUser(request);

        if (response.equals("Invalid email or password")) {
            return ResponseEntity.badRequest().body(response);
        }

        return ResponseEntity.ok(response);
    }
}