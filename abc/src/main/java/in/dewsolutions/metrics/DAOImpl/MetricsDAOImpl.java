package in.dewsolutions.metrics.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import in.dewsolutions.metrics.DAO.MetricDAO;
import in.dewsolutions.metrics.DTO.MetricsDTO;
import in.dewsolutions.metrics.Utils.MetricsConstant;

@Repository
public class MetricsDAOImpl extends BaseJDBCDAO implements MetricDAO {

	public String insertMetrics(final MetricsDTO metrics) {
		// TODO Auto-generated method stub
		int count = checkIfMetricNameWithTypeExist(metrics);
		String result = "";
		if (count > 0) {
			result = updateMetrics(metrics);
		}

		else if (count == 0) {
			result = insertMetricIfNotExist(metrics);
		}
		return result;
	}

	public List<MetricsDTO> getMetrics() {
		List<MetricsDTO> metricsListValue = new ArrayList<MetricsDTO>();
		String sql = "select m.id, mt.type,f.field_type,m.uom,n.number_type,m.metric_name,m.number_range,m.character_limit,"
				+ "group_concat(ml.list_values SEPARATOR '|#') as listvalues from metrics m "
				+ "LEFT join metrics_list ml on ml.metrics_id=m.id AND ml.status = ? "
				+ "inner join metric_type mt on mt.id=m.metrics_type_id " + "left join field f on f.id=m.field_type_id "
				+ "left join number n on n.id=m.number_type_id group by m.id";
		try {
			metricsListValue = getJdbcTemplate().query(sql, new BeanPropertyRowMapper<MetricsDTO>(MetricsDTO.class),
					MetricsConstant.IS_ACTIVE);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return metricsListValue;
	}

	private String insertMetricIfNotExist(final MetricsDTO metrics) {
		final String sql = "insert into metrics(metrics_type_id ,field_type_id,uom,number_type_id,metric_name,"
				+ "number_range,character_limit ) values(?,?,?,?,?,?,?)";
		KeyHolder holder = new GeneratedKeyHolder();
		getJdbcTemplate().update(new PreparedStatementCreator() {

			public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
				PreparedStatement ps = connection.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
				ps.setInt(1, metrics.getMetricsTypeId());
				ps.setInt(2, metrics.getFieldTypeId());
				ps.setString(3, metrics.getUom());
				if (metrics.getNumberTypeId() == null || metrics.getNumberTypeId().equals("")) {
					ps.setNull(4, java.sql.Types.NULL);
				} else {
					ps.setInt(4, metrics.getNumberTypeId());
				}

				ps.setString(5, metrics.getMetricName());

				if (metrics.getNumberRange() == null) {
					ps.setNull(6, java.sql.Types.NULL);
				} else {
					ps.setInt(6, metrics.getNumberRange());
				}
				if (metrics.getCharacterLimit() == null) {
					ps.setNull(7, java.sql.Types.NULL);
				} else {
					ps.setInt(7, metrics.getCharacterLimit());
				}

				return ps;
			}
		}, holder);

		Long returnkey = holder.getKey().longValue();
		String sql1 = "insert into metrics_list(metrics_id,list_values ) values(?,?)";

		if (!metrics.getListValue().contains("")) {

			for (int i = 0; i < metrics.getListValue().size(); i++) {
				getJdbcTemplate().update(sql1, returnkey, metrics.getListValue().get(i));
			}
		}
		return "sucessfully inserted";
	}

	private String updateMetrics(final MetricsDTO metrics) {
		String sql = "select id from metrics where metric_name= ? && metrics_type_id = ?;";
		Long returnkey = getJdbcTemplate().queryForObject(sql, Long.class, metrics.getMetricName(),
				metrics.getMetricsTypeId());
		sql = "UPDATE metrics SET field_type_id = ?,uom = ?,number_type_id = ?,number_range = ?,character_limit = ? WHERE id= ?";
		getJdbcTemplate().update(sql, metrics.getFieldTypeId(), metrics.getUom(), metrics.getNumberTypeId(),
				metrics.getNumberRange(), metrics.getCharacterLimit(), returnkey);
		getJdbcTemplate().update("update metrics_list set status= ? where metrics_id = ?", MetricsConstant.IS_INACTIVE,
				returnkey);
		String sql1 = "INSERT INTO metrics_list (metrics_id,list_values) VALUES (?,?) ON DUPLICATE KEY UPDATE status = ? ";

		if (!metrics.getListValue().contains("")) {

			for (int i = 0; i < metrics.getListValue().size(); i++) {
				getJdbcTemplate().update(sql1, returnkey, metrics.getListValue().get(i), MetricsConstant.IS_ACTIVE);
			}
		}
		return "sucessfully updated";
	}

	public int checkIfMetricNameWithTypeExist(MetricsDTO metrics) {
		int count = 0;
		String sql = "select id from metrics where metric_name=? && metrics_type_id=?";
		try {
			count = getJdbcTemplate().queryForObject(sql, Integer.class, metrics.getMetricName(),
					metrics.getMetricsTypeId());
		} catch (EmptyResultDataAccessException e) {
			System.out.println("No match found");
		} catch (Exception e) {
			System.out.println("Error occurred " + e);
		}
		return count;
	}

}
