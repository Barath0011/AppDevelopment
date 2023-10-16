package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Feedback;
import com.example.demo.Repository.FeedbackRepository;




@Service
public class FeedbackService 
{
	@Autowired
    private FeedbackRepository feedbackrepo;
	public List<Feedback> getFeedback() 
	{
		return feedbackrepo.findAll();
	}
	public void saveFeedback(Feedback registerEntity) 
	{
	        feedbackrepo.save(registerEntity);
	}
	public void updateFeedback(Feedback registerEntity) 
	{
		feedbackrepo.save(registerEntity);	
	}
	public void deleteFeedback(int feedbackId) 
	{
		feedbackrepo.deleteById(feedbackId);
	}
}