package com.turing.api.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.*;
import java.util.stream.Collectors;

import org.apache.el.stream.Stream;
import org.springframework.stereotype.Service;

import com.turing.api.common.component.Messenger;
import com.turing.api.common.component.security.JwtProvider;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.model.User;
import com.turing.api.user.repository.UserRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;
    private final JwtProvider jwt;

    @Override
    public Messenger save(UserDto user) {
        entityToDto((repo.save(dtoToEntity(user))));
        return Messenger.builder()
                .message("SUCCESS")
                .build();
    }

    @Override
    public List<UserDto> findAll() {
        List<UserDto> list = repo.findAll().stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public Messenger deleteById(Long id) {
        repo.deleteById(id);
        return Messenger.builder()
                .message((repo.existsById(id)) ? "SUCCES" : "FAIL")
                .build();

    }

    @Override
    public Messenger modify(UserDto dto) {
        User ent = repo.save(dtoToEntity(dto));

        return Messenger.builder()
                .message((ent instanceof User) ? "SUCCES" : "FAIL")
                .build();
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return repo.findById(id).map(i -> entityToDto(i));
    }

    @Override
    public long count() {
        return repo.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public boolean existsByUsername(String username) {
        return repo.existsByUsername(username);
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        return repo.findUsersByName(name);
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        return null;
    }

    @Override
    public Messenger login(UserDto dto) {
        boolean flag = repo.findUsersByUsername(dto.getUsername()).get().getPassword().equals(dto.getPassword());

        return Messenger.builder()
                .message(flag ? "SUCCESS" : "FAIL")
                .accessToken(flag ? jwt.createToken(dto) : "NONE")
                .build();
    }

    @Override
    public Optional<UserDto> findUsersByUsername(String username) {
        Optional<User> user = repo.findUsersByUsername(username);
        // log.info("findUsersByUsername {}", user);
        return Optional.of(entityToDto(user.get()));
    }

}
