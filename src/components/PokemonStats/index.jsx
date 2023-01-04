import { StatsContainer, UniqueStatContainer, StatCategory, StatBar, StatFill, StatValue } from './styles';

function PokemonStats({ stats, children }) {
	return (
		<StatsContainer>
			{children}
			{stats.map((stat, index) => (
				<UniqueStatContainer key={stats[index].name}>
					<StatCategory>
						<span>{stats[index].name}</span>
					</StatCategory>
					<StatBar>
						<StatFill percentage={(stats[index].value * 100) / 180} />
					</StatBar>
					<StatValue>
						<span>{stats[index].value}</span>
					</StatValue>
				</UniqueStatContainer>
			))}
		</StatsContainer>
	);
}

export default PokemonStats;
