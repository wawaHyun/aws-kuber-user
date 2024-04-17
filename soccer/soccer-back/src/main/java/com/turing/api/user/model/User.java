package com.turing.api.user.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.*;

import com.turing.api.article.model.Article;
import com.turing.api.common.model.BaseEntity;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@Entity(name = "users")
public class User extends BaseEntity {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String phone;

    @Column(name = "address_id")
    private Long addressId;

    private String job;

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL)
    private List<Article> article;

    @Builder(builderClassName = "builder")
    public User(Long id, String username, String password, String name,
            String phone, Long addressId, String job
    // ,List<Article> article
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.addressId = addressId;
        this.job = job;
        // this.article = article;
    }

}