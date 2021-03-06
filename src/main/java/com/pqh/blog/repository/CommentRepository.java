package com.pqh.blog.repository;

import com.pqh.blog.domain.Comment;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Spring Data JPA repository for the Comment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Query("select comment from Comment comment where comment.user.login = ?#{principal.username}")
    List<Comment> findByUserIsCurrentUser();

    @Query("select comment from Comment comment where comment.story.id = ?#{#story_id}")
    List<Comment> findByStoryID(@Param("story_id") long story_id);

    @Transactional
    @Modifying
    @Query("delete from Comment comment where comment.story.id = ?#{#story_id}")
    void deleteByStory(@Param("story_id") long story_id);

}
