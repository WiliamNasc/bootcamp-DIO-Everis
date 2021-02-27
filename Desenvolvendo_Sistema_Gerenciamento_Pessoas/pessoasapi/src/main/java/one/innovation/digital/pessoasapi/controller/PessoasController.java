package one.innovation.digital.pessoasapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/pessoas")
public class PessoasController {

    @GetMapping
    public String getBook(){
        return "API Test";
    }
}
