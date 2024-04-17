@OpenAPIDefinition(
        info = @Info(title = "채팅서비스 API 명세서",
                description = "헥사고날 아키텍처 기반 채팅 서비스 API 명세서",
                version = "v1"))
@RequiredArgsConstructor
@Configuration
public class SwaggerConfig {
 
    @Bean
    public GroupedOpenApi chatOpenApi() {
        String[] paths = {"/v1/**"};
 
        return GroupedOpenApi.builder()
                .group("채팅서비스 API v1")
                .pathsToMatch(paths)
                .build();
    }
}