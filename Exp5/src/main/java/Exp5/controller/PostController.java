package Exp5.controller;

import Exp5.model.Post;
import Exp5.response.ApiResponse;
import Exp5.service.PostService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService service;

    public PostController(PostService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Post>>> getAllPosts() {
        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Posts fetched successfully",
                        service.getAllPosts()
                )
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> getPost(@PathVariable Long id) {

        Post post = service.getPostById(id);

        if (post == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Post fetched successfully",
                        post
                )
        );
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Post>> createPost(
            @Valid @RequestBody Post post) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Post created successfully",
                        service.createPost(post)
                )
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> updatePost(
            @PathVariable Long id,
            @Valid @RequestBody Post post) {

        Post updatedPost = service.updatePost(id, post);

        if (updatedPost == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Post updated successfully",
                        updatedPost
                )
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePost(
            @PathVariable Long id) {

        if (!service.deletePost(id)) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Post deleted successfully",
                        null
                )
        );
    }
}