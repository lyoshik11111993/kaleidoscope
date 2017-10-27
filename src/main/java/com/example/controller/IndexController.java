package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import static com.example.config.AppPaths.ROOT;

@Controller
public class IndexController {

    @GetMapping(ROOT)
    public String get() {
        return "index";
    }
}
