package com.example.demo.controller.vue;

import com.example.demo.entity.Board;
import com.example.demo.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.VueProductService;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("/vueproduct")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
public class VueProductController {

    @Autowired
    private VueProductService service;

    @PostMapping("/register")
    public ResponseEntity<Product> registerProduct(@Validated @RequestBody Product product) throws Exception {
        log.info("post register request from vue");

        service.register(product);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/lists")
    public ResponseEntity<List<Product>> getLists () throws Exception {
        log.info("getLists(): " + service.list());

        return new ResponseEntity<>(service.list(), HttpStatus.OK);
    }

    @GetMapping("/{productNo}")
    public ResponseEntity<Product> read(@PathVariable("productNo") Integer productNo) throws Exception {
        Product product = service.read(productNo);

        return new ResponseEntity<Product>(product, HttpStatus.OK);
    }

    @PutMapping("/{productNo}")
    public ResponseEntity<Product> modify(@PathVariable("productNo") Integer productNo,
                                        @Validated @RequestBody Product product) throws Exception {
        log.info("modifyProduct() - productNo: " + productNo);

        product.setProductNo(productNo);

        log.info("modifyProduct(): " + product);

        service.modify(product);

        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @DeleteMapping("/{productNo}")
    public ResponseEntity<Void> remove(@PathVariable("productNo") Integer productNo) throws Exception {
        service.remove(productNo);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}