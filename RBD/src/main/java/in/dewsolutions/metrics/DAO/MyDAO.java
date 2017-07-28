package in.dewsolutions.metrics.DAO;


import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import in.dewsolutions.metrics.DAOImpl.BaseJDBCDAO;
import in.dewsolutions.metrics.DTO.Books;
import in.dewsolutions.metrics.Utils.MetricsConstant;

@Repository
public class MyDAO extends BaseJDBCDAO {
	   
	public void insertStandared(Books book){
		String sql="insert into standared(created_on,status,standared_name) values(now(),1,?)";
		System.out.println(book.getStandaredName());
	getJdbcTemplate().update(sql,book.getStandaredName());
	
	}
	
	public void insertBoard(Books book){
		String sql="insert into board(created_on,status,board_name) values(now(),1,?)";
	getJdbcTemplate().update(sql,book.getBoardName());
		
	}
	public void insertBookType(Books book){
		String sql="insert into book_type(created_on,status,book_type) values(now(),1,?)";
	getJdbcTemplate().update(sql,book.getBookType());
		
	}
	
	public void insertSubject(Books book){
		String sql="insert into subject(created_on,status,subject_name) values(now(),1,?)";
	getJdbcTemplate().update(sql,book.getSubjectName());
		
	}
	
	public void updateStandared(Books book){
		String sql="UPDATE standared SET standared_name = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,book.getStandaredName(),book.getStandaredId());
		
	}
	
	public void updateBoard(Books book){
		String sql="UPDATE board SET board_name = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,book.getBoardName(),book.getBoardId());
		
	}
	
	public void updateBookType(Books book){
		String sql="UPDATE book_type SET book_type = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,book.getBookType(),book.getBookId());
		
	}
	
	public void updateSubject(Books book){
		String sql="UPDATE subject SET subject_name = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,book.getSubjectName(),book.getSubjectId());
		
	}
	
	public List<Books> getSubject(){
		List<Books> listSubject=null;
		
		String sql="select * from subject";
		listSubject=getJdbcTemplate().query(sql, new BeanPropertyRowMapper<Books>(Books.class));
		return listSubject;
	}
	
	public List<Books> getBoard(){
		List<Books> listBoard=null;

		String sql="select * from board";
		listBoard=getJdbcTemplate().query(sql, new BeanPropertyRowMapper<Books>(Books.class));
		return listBoard;	
	}
	
	public List<Books> getStandared(){
		List<Books> listStandared=null;

		String sql="select * from standared";
		listStandared=getJdbcTemplate().query(sql, new BeanPropertyRowMapper<Books>(Books.class));
		return listStandared;	
	}
	
	public List<Books> getBookType(){
		List<Books> listBookType=null;

		String sql="select * from book_type";
		listBookType=getJdbcTemplate().query(sql, new BeanPropertyRowMapper<Books>(Books.class));
		return listBookType;	
	}
	
	public void addBooks(Books book){
		String sql="insert into stock_transaction_detail (standared_id,book_id,board_id,subject_id,transaction_type_id,"+
					"no_of_book,created_on,status) values(?,?,?,?,?,?,now(),?)";
		getJdbcTemplate().update(sql,book.getStandaredId(),book.getBookId(),book.getBoardId(),book.getSubjectId(),
				book.getTransactionTypeId(),book.getNoOfBook(),book.getStatus());
	}
	
	public void deleteSubject(Books book){
		String sql="UPDATE subject SET status = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,MetricsConstant.IS_INACTIVE,book.getSubjectId());
		
	}
	
	public void deleteStandared(Books book){
		String sql="UPDATE standared SET status = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,MetricsConstant.IS_INACTIVE,book.getStandaredId());
		
	}
	public void deleteBoard(Books book){
		String sql="UPDATE board SET status = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,MetricsConstant.IS_INACTIVE,book.getBoardId());
		
	}
	public void deleteBookType(Books book){
		String sql="UPDATE book_type SET status = ?, modified_on = now() WHERE id=?";
	getJdbcTemplate().update(sql,MetricsConstant.IS_INACTIVE,book.getBookId());
		
	}
	
	public Integer addBookMapping(Books book){
		String sql="insert into book_mapping (standared_id,book_id,board_id,subject_id) values(?,?,?,?)";
	 return getJdbcTemplate().update(sql,book.getStandaredId(),book.getBookId(),book.getBoardId(),book.getSubjectId());
	
	}
	
	public void addGroupSet(Books book){
		String sql="insert into group_set (group_name) values(?)";
	  getJdbcTemplate().update(sql,book.getGroupName());
	
	}
	
	public void addGroupBookMapping(Books book){
		String sql="insert into group_book_mapping (group_set_id,book_mapping_id) values(?,?)";
	 getJdbcTemplate().update(sql,book.getGroupSetId(),book.getBookMappingId());
	
	}
	
	
}
