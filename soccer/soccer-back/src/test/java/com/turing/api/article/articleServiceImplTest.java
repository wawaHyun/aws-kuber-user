// package com.turing.api.article;

// import java.util.List;
// import java.util.Arrays;

// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.junit.jupiter.api.extension.ExtendWith;
// import org.mockito.BDDMockito;
// import org.mockito.Mock;
// import org.mockito.junit.jupiter.MockitoExtension;
// import org.springframework.boot.test.context.SpringBootTest;

// import com.turing.api.article.model.Article;
// import com.turing.api.article.model.ArticleDto;
// import com.turing.api.article.repository.ArticleRepository;
// import com.turing.api.article.service.ArticleService;
// import com.turing.api.article.service.ArticleServiceImpl;

// import static org.assertj.core.api.Assertions.assertThat;
// import static org.junit.jupiter.api.Assertions.*;

// @SpringBootTest
// @ExtendWith(MockitoExtension.class)
// public class articleServiceImplTest {

//     private ArticleService ser;
//     private static Article testArticle;

//     @Mock
//     private ArticleRepository repo;

//     @BeforeEach
//     void setup() {
//         this.ser = new ArticleServiceImpl(repo);
//     }

//     @BeforeEach
//     void init() {
//         testArticle = Article.of("test title", "test content");
//     }

//     @Test
//     public void article_title_search() throws Exception {
//         // given
//         repo.save(testArticle);

//         // when
//         Article article = repo.findById(1L).get();

//         // then
//         assertThat(article.getTitle())
//                 .isEqualTo("테스트제목");
//     }

//     @Test
//     public void article_all_search() throws Exception {
//         List<Article> articles = getList();
//         BDDMockito.given(repo.findAll()).willReturn(articles);
//         List<ArticleDto> list = ser.findAll();
//         assertThat(list.size())
//                 .isEqualTo(3);
//     }

//     private List<Article> getList() {
//         return Arrays.asList(
//                 Article.builder().id(1L).title("유관순").content("유관순은 3.1운동 주역이었다.").build(),
//                 Article.builder().id(2L).title("파묘").content("화림이 짱 음 굿").build(),
//                 Article.builder().id(1L).title("김석진").content("언제 제대해").build());
//     }

// }
