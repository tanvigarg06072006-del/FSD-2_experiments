package Exp5.service;

import Exp5.model.Post;
import Exp5.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> getAllPosts() {
        return repository.findAll();
    }

    public Post getPostById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Post createPost(Post post) {
        return repository.save(post);
    }

    public Post updatePost(Long id, Post post) {
        Post existingPost = repository.findById(id).orElse(null);

        if (existingPost == null) {
            return null;
        }

        existingPost.setTitle(post.getTitle());
        existingPost.setContent(post.getContent());

        return repository.save(existingPost);
    }

    public boolean deletePost(Long id) {
        if (!repository.existsById(id)) {
            return false;
        }

        repository.deleteById(id);
        return true;
    }
}