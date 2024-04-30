package com.turing.api.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    void deleteAllById(Long id);

    List<UserDto> findUsersByName(String name);

    List<UserDto> findByUsername(String username);

    Optional<User> findUsersByUsername(String username);

    
    @Modifying //싱태변화시킬때 사용
    @Query("update users set token=:token where id = :id")
    public void modifyTokenById(@Param("token")String token, @Param("id") Long id);

}
