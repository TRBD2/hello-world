package in.dewsolutions.metrics.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.dewsolutions.metrics.DAO.MyDAO;
import in.dewsolutions.metrics.DTO.Books;
import in.dewsolutions.metrics.Services.MyService;

@Service
public class MyServiceImpl implements MyService { 
	
	//private static final Logger logger = Logger.getLogger(AppServiceImpl.class);

	@Autowired
	private MyDAO myDAO;
	
	@Override
	public void insertStandared(Books book) {
	    myDAO.insertStandared(book);
	}
	
	@Override
	public void insertBoard(Books book) {
	    myDAO.insertBoard(book);
	}
	
	@Override
	public void insertBookType(Books book) {
	    myDAO.insertBookType(book);
	}
	
	@Override
	public void updateStandared(Books book) {
	    myDAO.updateStandared(book);
	}
	
	@Override
	public void updateBoard(Books book) {
	    myDAO.updateBoard(book);
	}
	
	@Override
	public void updateBookType(Books book) {
	    myDAO.updateBookType(book);
	}
	
	@Override
	public void updateSubject(Books book) {
	    myDAO.updateSubject(book);
	}
	
	@Override
	public void deleteSubject(Books book) {
	    myDAO.deleteSubject(book);
	}
	
	@Override
	public void deleteStandared(Books book) {
	    myDAO.deleteStandared(book);
	}@Override
	public void deleteBoard(Books book) {
	    myDAO.deleteBoard(book);
	}@Override
	public void deleteBookType(Books book) {
	    myDAO.deleteBookType(book);
	}
	
	@Override
	public void insertSubject(Books book) {
	    myDAO.insertSubject(book);
	}
	
	
	
	@Override
	public void addBooks(Books book) {
	    myDAO.addBooks(book);
	}

	public Integer addBookMapping(Books book) {
	    return myDAO.addBookMapping(book);
	}
	
	public void addGroupSet(Books book) {
	     myDAO.addGroupSet(book);
	}
	public void addGroupBookMapping(Books book) {
	     myDAO.addGroupBookMapping(book);
	}
	
	
	@Override
	public List<Books> getSubject() {
		// TODO Auto-generated method stub
		
		List<Books> listSubject=null;
		listSubject=myDAO.getSubject();
		return listSubject;
	}
	

	@Override
	public List<Books> getBoard() {
		// TODO Auto-generated method stub
		List<Books> listBoard=null;
		
		listBoard=myDAO.getBoard();
		return listBoard;
	}

	@Override
	public List<Books> getStandared() {
		// TODO Auto-generated method stub
		List<Books> listStandared=null;
		
		listStandared=myDAO.getStandared();
		return listStandared;
	}
	
	public List<Books> getBookType() {
		// TODO Auto-generated method stub
		
		List<Books> listBookType=null;
		listBookType=myDAO.getBookType();
		return listBookType;
	}
	
}
