package com.turing.api.user.service;

import java.util.*;

import com.turing.api.common.component.Messenger;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;

public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {

    List<UserDto> findUsersByName(String name);

    Optional<UserDto> findUsersByUsername(String username);

    List<UserDto> findUsersByJob(String job);

    Messenger login(UserDto param);

    default User dtoToEntity(UserDto dto) {
        return User.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .job(dto.getJob())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목록을 가져올 경우
    }

    default UserDto entityToDto(User i) {
        return UserDto.builder()
                .id(i.getId())
                .username(i.getUsername())
                .password(i.getPassword())
                .name(i.getName())
                .phone(i.getPhone())
                .job(i.getJob())
                .modDate(String.valueOf(i.getModDate()))
                .regDate(String.valueOf(i.getRegDate()))
                .build();
    }

}
