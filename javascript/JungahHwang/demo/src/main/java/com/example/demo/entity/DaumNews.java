package com.example.demo.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@ToString
public class DaumNews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long newSeq;

    @Column(length = 20, nullable = false)
    private String newsNo;

    @Column(length = 20, nullable = false)
    private String category;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(length = 2000, nullable = false)
    private String address;

    @Builder
    public DaumNews(String newsNo, String category, String title, String address) {
        this.newsNo = newsNo;
        this.category = category;
        this.title = title;
        this.address = address;
    }
}
