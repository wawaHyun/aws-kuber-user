package com.turing.api.common.security.serveice;

import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;

public interface AuthService {

    Messenger login(UserDto user);
    
    String createToken(UserDto user);

}