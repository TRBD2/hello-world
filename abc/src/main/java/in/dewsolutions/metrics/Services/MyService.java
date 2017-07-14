package in.dewsolutions.metrics.Services;

import java.util.List;

import in.dewsolutions.metrics.DTO.Books;

public interface MyService {

	public void insertStandared(Books book);

	public void insertBoard(Books book);

	public void insertBookType(Books book);

	public void insertSubject(Books book);

	public void updateStandared(Books book);

	public void updateBoard(Books book);

	public void updateBookType(Books book);

	public void updateSubject(Books book);

	public List<Books> getSubject();

	public List<Books> getBoard();

	public List<Books> getStandared();

	public List<Books> getBookType();
	public void deleteSubject(Books book);
	public void deleteStandared(Books book);
	public void deleteBoard(Books book);
	public void deleteBookType(Books book);
	
	
	public Integer addBookMapping(Books book);
	public void addGroupSet(Books book);
	public void addGroupBookMapping(Books book);
	
	
	

	public void addBooks(Books book);

}